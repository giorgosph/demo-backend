const db = require("../database/db");

module.exports = class Content {
  constructor(data) {
    this.id = data.id,
    this.title = data.title,
    this.subtitle = data.subtitle,
    this.body = data.body,
    this.assetPath = data.asset_path,
    this.published_at = data.published_at
  }

  static async getContentForSection(id) {
    const content = await db.query(
      "SELECT ct.* FROM content as ct join connection as cn on ct.id=cn.content_id join section as s on s.id=cn.section_id where section_id=$1;",
      [id]
    );

    if (content.rows.length) return new Content(content.rows[0]);
    else return false;
  }

  static async getByID(id) {
    const content = await db.query("SELECT * FROM content where id=$1;", [id]);

    if (content.rows.length) return new Content(content.rows[0]);
    else return false;
  }
  
  static async getByAbbr(abbr) {
    const content = await db.query(
      "SELECT ct.* FROM content as ct join connection as cn on ct.id=cn.content_id join section as s on s.id=cn.section_id where s.abbr=$1;",
      [abbr]
    );

    if (content.rows.length) return new Content(content.rows[0]);
    else return false;
  }
};