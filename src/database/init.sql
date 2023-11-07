CREATE TABLE Content (
    id SERIAL PRIMARY KEY,
    title TEXT,
    subtitle TEXT,
    body TEXT,
    asset_path TEXT,
    published_at TIMESTAMP
);

CREATE TABLE Section (
    id SERIAL PRIMARY KEY,
    title TEXT,
    abbr TEXT
);

CREATE TABLE Connection (
    content_id INTEGER,
    section_id INTEGER,
    PRIMARY KEY (content_id, section_id),
    FOREIGN KEY (content_id) REFERENCES Content(id),
    FOREIGN KEY (section_id) REFERENCES Section(id)
);
