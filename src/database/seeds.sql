
INSERT INTO Section (title, abbr) 
VALUES ('logo', 'lg');

INSERT INTO Content (title, asset_path, published_at)
VALUES ('logo', 'https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo', NOW());


INSERT INTO Connection (content_id, section_id) 
VALUES (1, 1);
