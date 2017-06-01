-- remove any records and start the id sequence back to 1
TRUNCATE TABLE posts CASCADE;
TRUNCATE TABLE comments CASCADE;

-- add create tables here

-- create posts
INSERT INTO posts
  (title, body)
VALUES
  ('sample post 1', 'adsjfasdfajsdfhasdjghadshjgflsdjgjashdgjhads;lghqdshflahflahsdf'),
  ('sample post 2', 'asdofhasdgjahsdgljasdhgasljdgsadghagljahsdghasdghjasga')

-- create comments
INSERT INTO comments
 (cbody, post_id)
VALUES
( 'alsdfaslkfjaslkfjasl', 1 ),
('fdjasfhasghasdhgasjdhgashjg', 1),
('daskghaskghkasdgh;aghahg;ahghasdgh', 1),
('akhksdghkavaksvbaksg', 2)
