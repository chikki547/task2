import React, { useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { useGetUser } from "../../context/UserDataProvider";
import { Typography } from "@mui/material";
import { Button, Input } from "antd";
import { putApi } from "../../services/api/callApis";
type Props = {};

const Post = (props: Props) => {
  const { posts } = useGetUser();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let { id = 0 }: any = useParams();

  if ((id === 0 || id) && posts && posts.length) {
    return !showForm ? (
      <div style={{ padding: 16 }}>
        <div>
          <Typography variant="h5">title : {posts[id].title}</Typography>
          <Typography variant="body1"> {posts[id].body}</Typography>
        </div>
        <div>
          {" "}
          <Button
            onClick={() => {
              setShowForm(true);
              setTitle((posts && posts[id].title) ?? "");
              setBody((posts && posts[id].body) ?? "");
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    ) : (
      <div style={{ padding: 16 }}>
        <Input
          aria-label="title"
          style={{ paddingBottom: "16px", marginBottom: "16px" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          aria-label="body"
          style={{ paddingBottom: "16px", marginBottom: "16px" }}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <Button
          onClick={async () => {
            await putApi("/posts", { ...posts[id], title: title, body: body });
            setShowForm(false);
            redirect("/");
          }}
        >
          Submit
        </Button>
      </div>
    );
  } else {
    return null;
  }
};

export default Post;
