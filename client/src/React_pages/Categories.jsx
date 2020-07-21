import React, { Component } from "react";
import { getOneCategory, addPost, getPosts } from "../services/apihelper";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default class Categories extends Component {
  state = {
    category: null,
  };
  componentDidMount = async () => {
    const category = await getOneCategory(this.props.match.params.id);
    this.setState({
      category,
    });
    const posts = await getPosts();
    this.setState({
      posts,
    });
  };

  render() {
    const date = new Date();

    const createdBy =
      this.state.posts &&
      this.state.posts.map((post) => (
        <div>
          <p style={{ fontSize: "0.633vw", color: "#747474" }}>
            <strong> Posted by </strong>
            <Link to={`/profile/${post.user_id}`}>{post.user.username}</Link>
          </p>
        </div>
      ));
    return (
      <div class="py-2 max-w-full" style={{ margin: "0 19.667vw" }}>
        {this.state.category && (
          <div>
            <h1
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                flexFlow: "column wrap",
                textAlign: "center",
                textShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                color: "#322e3b",
                fontFamily: "Helvetica",
                fontSize: "4.8vw",
              }}
            >
              Category: {this.state.category.name}
            </h1>
            {this.state.category.posts.map((post) => (
              <div style={{ padding: "1.3vw 2.667vw" }}>
                <ul
                  style={{
                    backgroundColor: "#F8F8F8",
                    display: "flex",
                    alignItems: "stretch",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    flexFlow: "row wrap",
                    textAlign: "left",
                    alignItems: "center",
                    justifyContent: "center",
                    // width: "44.4vw",
                    height: "20.067vw",
                    borderRadius: "0.8vw",
                    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.48)",
                    paddingTop: "1.067vw",

                    paddingLeft: "2.067vw",
                    paddingRight: "2.067vw",
                    overflow: "scroll",
                  }}
                >
                  <li style={{ width: "100%" }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#000",
                        fontSize: "1.4vw",
                        padding: "0.267vw 0 0.757vw",
                        lineHeight: "1.2vw",
                      }}
                    >
                      {post.title}
                    </p>
                    <hr style={{ border: "1px solid #DDDDDD" }}></hr>
                  </li>
                  <li style={{ padding: "0.767vw 0", width: "100%" }}>
                    <p
                      style={{
                        color: "#747474",
                        fontWeight: "350",
                        fontSize: "0.833vw",
                      }}
                    >
                      <strong>Description: </strong>
                      {post.description}
                    </p>
                  </li>
                  <hr
                    style={{ border: "1px solid #DDDDDD", width: "100%" }}
                  ></hr>
                  <li style={{ padding: "0.767vw 0", width: "100%" }}>
                    <p class="font-light" style={{ fontSize: "0.733vw" }}>
                      {post.body}
                    </p>
                  </li>
                  <hr
                    style={{ border: "1px solid #DDDDDD", width: "100%" }}
                  ></hr>

                  <li style={{ padding: "0.767vw 0", width: "100%" }}>
                    {/* {this.state.posts &&
                                this.state.posts.map((post) => (
                                    <p>
                                        Posted by{" "}
                                        <Link to={`/user/${post.user_id}`}>
                                            {post.user.username}
                                        </Link>
                                    </p>
                                ))} */}
                    {createdBy}

                    <p style={{ fontSize: "0.633vw", color: "#747474" }}>
                      <strong>Created:&nbsp;</strong>
                      <Moment format="MMM D YYYY" withTitle>
                        {post.created_at}
                      </Moment>
                      , <strong>last updated:</strong>{" "}
                      <Moment fromNow ago>
                        {post.updated_at}
                      </Moment>
                      &nbsp;ago
                    </p>
                  </li>
                  <hr
                    style={{ border: "1px solid #DDDDDD", width: "100%" }}
                  ></hr>

                  <li style={{ padding: "0.767vw 0", width: "100%" }}>
                    <p></p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}