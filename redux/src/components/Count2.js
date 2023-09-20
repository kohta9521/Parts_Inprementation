import React from "react";
import { connect } from "react-redux";

function App({ count, posts }) {
  return (
    <>
      <div>Count Components: {count}</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}: {post.title}
          </li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(App);
