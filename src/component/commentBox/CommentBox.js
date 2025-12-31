"use client";

import { useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

/* INITIAL COMMENTS (NESTED) */
const initialComments = [
    {
        id: 1,
        user: "SuperSongsSpace",
        avatar: "/user1.png",
        text: "This song has magic ❤️",
        likes: 461,
        liked: false,
        time: "5 months ago",
        replies: [
            {
                id: 11,
                user: "simran_singh",
                avatar: "/user2.png",
                text: "Absolutely agree 💯",
                likes: 12,
                liked: false,
                time: "1 year ago",
                replies: [
                    {
                        id: 111,
                        user: "rahul_dev",
                        avatar: "/user-default.png",
                        text: "Same here 🔥",
                        likes: 2,
                        liked: false,
                        time: "3 days ago",
                        replies: [],
                    },
                ],
            },
        ],
    },
];


//  Count comments recursively
const countAllComments = (list) =>
    list.reduce(
        (sum, item) => sum + 1 + countAllComments(item.replies),
        0
    );

// Toggle like recursively
const toggleLikeRecursive = (list, id) =>
    list.map((item) =>
        item.id === id
            ? {
                ...item,
                liked: !item.liked,
                likes: item.liked ? item.likes - 1 : item.likes + 1,
            }
            : {
                ...item,
                replies: toggleLikeRecursive(item.replies, id),
            }
    );

//  Add reply recursively
const addReplyRecursive = (list, parentId, reply) =>
    list.map((item) =>
        item.id === parentId
            ? { ...item, replies: [...item.replies, reply] }
            : { ...item, replies: addReplyRecursive(item.replies, parentId, reply) }
    );


function CommentItem({
    comment,
    level = 0,
    onLike,
    onReply,
    activeReplyId,
    replyText,
    setReplyText,
    submitReply,
}) {
    return (
        <div style={{ marginLeft: level * 24 }} className="mt-6">
            <div className="flex gap-3">
                <Image
                    src={comment.avatar}
                    alt={comment.user}
                    width={36}
                    height={36}
                    className="rounded-full" />
                <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm font-semibold"> @{comment.user}
                            <span className="text-xs text-gray-500 ml-2">  {comment.time} </span>
                        </p>
                        <p className="text-sm mt-1">{comment.text}</p>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex gap-5 mt-2 text-sm">
                        <button
                            onClick={() => onLike(comment.id)}
                            className={` flex items-center gap-2 ${comment.liked ? "text-blue-600 font-medium" : "text-gray-600"}`}>
                            <FaHeart /> {comment.likes}
                        </button>

                        <button onClick={() => onReply(comment.id)}
                            className="text-gray-600 hover:text-blue-600" >
                            {` Reply`}
                        </button>
                    </div>

                    {/* REPLY INPUT */}
                    {activeReplyId === comment.id && (
                        <div className="flex gap-2 mt-3">
                            <input
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="Write a reply..."
                                className="flex-1 border-b outline-none text-sm"
                            />
                            <button
                                onClick={() => submitReply(comment.id)}
                                className="text-blue-600 text-sm" >
                                {` Reply`}
                            </button>
                        </div>
                    )}

                    {/* RECURSIVE REPLIES */}
                    {comment.replies.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            level={level + 1}
                            onLike={onLike}
                            onReply={onReply}
                            activeReplyId={activeReplyId}
                            replyText={replyText}
                            setReplyText={setReplyText}
                            submitReply={submitReply}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

/*  MAIN COMPONENT */
export default function CommentBox() {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState("");
    const [replyTo, setReplyTo] = useState(null);
    const [replyText, setReplyText] = useState("");

    const totalComments = countAllComments(comments);

    /*  ADD COMMENT */
    const addComment = () => {
        if (!newComment.trim()) return;

        setComments([
            {
                id: Date.now(),
                user: "You",
                avatar: "/user-default.png",
                text: newComment,
                likes: 0,
                liked: false,
                time: "Just now",
                replies: [],
            },
            ...comments,
        ]);

        setNewComment("");
    };

    /*  LIKE */
    const handleLike = (id) => {
        setComments((prev) => toggleLikeRecursive(prev, id));
    };

    /*  ADD REPLY */
    const submitReply = (parentId) => {
        if (!replyText.trim()) return;

        const reply = {
            id: Date.now(),
            user: "You",
            avatar: "/user-default.png",
            text: replyText,
            likes: 0,
            liked: false,
            time: "Just now",
            replies: [],
        };

        setComments((prev) =>
            addReplyRecursive(prev, parentId, reply)
        );

        setReplyText("");
        setReplyTo(null);
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 mb-12">
            <h2 className="font-semibold text-xl mb-6">
                {totalComments} {` Comments`}
            </h2>

            {/* ADD COMMENT */}
            <div className="flex gap-4 mb-8">
                <Image
                    src="/user-default.png"
                    alt="user"
                    width={44}
                    height={44}
                    className="rounded-full"
                />
                <div className="flex-1">
                    <input
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a public comment..."
                        className="w-full border-b outline-none pb-2"
                    />
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={addComment}
                            className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm"
                        >
                            {` Comment`}
                        </button>
                    </div>
                </div>
            </div>

            {/* COMMENTS */}
            <div className="max-h-[520px] overflow-y-auto">
                {comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onLike={handleLike}
                        onReply={setReplyTo}
                        activeReplyId={replyTo}
                        replyText={replyText}
                        setReplyText={setReplyText}
                        submitReply={submitReply}
                    />
                ))}
            </div>
        </div>
    );
}
