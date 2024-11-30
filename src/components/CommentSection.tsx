"use client";

import { useState } from "react";

interface Comment {
  name: string;
  text: string;
}

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([
    { name: "Alice", text: "This is an amazing post!" },
    { name: "Bob", text: "I completely agree with this." },
    { name: "Charlie", text: "Great insights, keep it up!" },
  ]);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() && newName.trim()) {
      setComments([...comments, { name: newName, text: newComment }]);
      setNewComment("");
      setNewName("");
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li key={index} className="border p-2 rounded-lg">
            <p className="font-bold">{comment.name}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Add a Comment</h3>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border border-gray-300 rounded p-3 w-full"
            placeholder="Your name"
          />
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border border-gray-300 rounded p-3 w-full"
            placeholder="Write your comment"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}