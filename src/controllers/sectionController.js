const Section = require("../models/Section.js");
const Content = require("../models/Content.js");

const getAllContent = async (req, res) => {
  try {
    console.log("Getting content...");

    const sections = await Section.getAllSections();
    if (!sections) return res.status(204).json({ success: false });

    console.log("Sections:\n ", sections);

    const sectionPromises = sections.map(async (section) => {
      const content = await Content.getContentForSection(section.id);
      if (!content) throw new Error("No content found for section " + section);
      return { section: section, content: content };
    });

    const resolvedSections = await Promise.all(sectionPromises);

    console.log("Sending content:\n", resolvedSections);
    res.status(200).json({ success: true, content: resolvedSections });
  } catch (err) {
    console.error("Error Getting content:\n", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getContent = async (req, res) => {
  try {
    console.log(`Getting content with ID: ${req.params.id} ...`);

    const content = await Content.getByID(req.params.id);
    if (!content) return res.status(204).json({ success: false });

    console.log("Sending content:\n", content);
    res.status(200).json({ success: true, content: content });
  } catch (err) {
    console.error("Error Getting content by ID:\n", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getContentBySection = async (req, res) => {
  try {
    console.log(`Getting content with abbreviation: ${req.params.abbr} ...`);

    const content = await Content.getByAbbr(req.params.abbr);
    if (!content) return res.status(204).json({ success: false });

    console.log("Sending content:\n", content);
    res.status(200).json({ success: true, content: content });
  } catch (err) {
    console.error("Error Getting content by ID:\n", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  getAllContent,
  getContent,
  getContentBySection,
};