
import NoTailwindWrapper from "@/common-component/NoTailwindWrapper";
import React from "react";

const BlogDescription = ({ blog }) => {
  return (
    <NoTailwindWrapper
      styleText={`
        /* 👇 CSS inside Shadow DOM, Tailwind can't touch this */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "DM Sans", Arial, sans-serif;
        }

       .custom-container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  margin:40px 0px 0px 0px
}

@media (min-width: 640px) {
  .custom-container {
  margin-left: auto;
  margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
@media (min-width: 768px) {
  .custom-container {
  margin-left: auto;
  margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1024px) {
  .custom-container {
  margin-left: auto;
  margin-right: auto;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

        .descriptionContent {
        padding:30px;
        border:1px solid #37863f;
        border-radius:20px;
          line-height: 1.6;
          color: #333;
          font-size: 16px;
        }
          @media (min-width: 1024px) {
  .descriptionContent {
    font-size: 18px;
  }
}
          .descriptionContent ul li {
          padding-left:10px;
           list-style-position: inside;
          }
             .descriptionContent ol li {
          padding-left:10px;
           list-style-position: inside;
          }
           .descriptionContent img {
  max-width: 100%;
  height: auto;
  display: block;
}

      `}
    >
      <div className="custom-container">
        <div
          className="descriptionContent"
          dangerouslySetInnerHTML={{ __html: blog?.description }}
        />
      </div>
    </NoTailwindWrapper>
  );
};

export default BlogDescription;

