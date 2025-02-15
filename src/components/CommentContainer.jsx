import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const commentData = [
  {
    name: "Evan James",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
    replies: [
      {
        name: "Evan James",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
        replies: [
          {
            name: "Evan James",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
            replies: [
              {
                name: "Evan James",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
                replies: [],
              },
              {
                name: "Evan James",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
                replies: [],
              },
            ],
          },
          {
            name: "Evan James",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
            replies: [],
          },
        ],
      },
      {
        name: "Evan James",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
        replies: [],
      },
    ],
  },
  {
    name: "Evan James",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
    replies: [],
  },
  {
    name: "Evan James",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
    replies: [],
  },
  {
    name: "Evan James",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
    replies: [],
  },
  {
    name: "Evan James",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
    replies: [],
  },
  {
    name: "Evan James",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 p-3 w-60/100 rounded-md mt-2">
      <FontAwesomeIcon icon={faUser} className="p-3" />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({Comments}) => {
  return Comments.map((comment) => {
    return <Comment data={comment} />;
  });
};

const CommentContainer = () => {
  return (
    <div className="m-5 ml-10 p-2">
      <h1 className="text-2xl font-semibold">Comments</h1>
      <CommentList Comments={ commentData} />
    </div>
  );
};

export default CommentContainer;
