import React, { useEffect } from "react";
import { getApi } from "../../services/api/callApis";
import { useGetUser } from "../../context/UserDataProvider";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";

type Props = {};

const Blogs = (props: Props) => {
  const { data, posts, setPosts } = useGetUser();
  useEffect(() => {
    const getPosts = async () => {
      const posts = await getApi(`/users/${data?.id}/posts`);
      setPosts(posts);
    };
    if (data?.id) {
      getPosts();
    }
  }, [data?.id, setPosts]);

  return (
    <div style={{ display: "flex", padding: 32 }}>
      <Space size={16} wrap>
        {posts.map((item: any, index: number) => (
          <Link to={"/blogs/" + index}>
            <Card
              title={item?.title}
              key={index}
              style={{ width: 270, height: 300 }}
            >
              <p>{item?.body}</p>
            </Card>
          </Link>
        ))}
      </Space>
    </div>
  );
};

export default Blogs;
