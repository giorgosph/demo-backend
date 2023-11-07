
INSERT INTO Section (title, abbr) VALUES 
('logo', 'lg'),
('carousel', 'crl'),
('about us', 'ab');

INSERT INTO Content (title, asset_path, published_at) VALUES 
('logo', 'https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo', NOW()),
('carousel', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/369924255.jpg?k=62b93dc37b3ea33f141b12ac063a912b7e40fbc068d053503e1a359210cbf943&o=&hp=1*https://explora.mu/media/k2/items/cache/755a09762452d6eb5c314d532540d319_XL.jpg?t=20211110_093008*https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/6-best-sunset-spot-s-you-can-enjoy-in-labuan-bajo/image6.jpg', NOW());

INSERT INTO Content (body, published_at) VALUES 
('<div className="h-full flex flex-col items-center justify-center text-center"> <h1 className="font-bold my-16">About Us</h1> <h2 className="my-24">Our Story</h2> <p className="my-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nisl id hendrerit consequat, urna odio interdum lectus. </p> </div>', NOW());

INSERT INTO Connection (content_id, section_id) VALUES 
(1, 1),
(2, 2),
(3, 3);
