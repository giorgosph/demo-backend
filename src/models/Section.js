const db = require("../database/db");

module.exports = class Section {
  constructor(data) {
    this.id = data.id,
    this.title = data.title,
    this.abbr = data.abbr
  }

  static async getAllSections() {
    const sections = await db.query("SELECT * FROM section;");

    if (!sections.rows.length) return false;
    const allSections = sections.rows.map((section) => new Section(section));
    return allSections;
  }  
};