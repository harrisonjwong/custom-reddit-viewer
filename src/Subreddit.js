import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Subreddit.css";

export default class Subreddit extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: undefined
    };
  }
  componentDidMount() {
    this.callRedditApi("leagueoflegends");
  }

  async callRedditApi(subName) {
    try {
      const result = await axios.get(
        `https://www.reddit.com/r/${subName}/.json?limit=25`
      );
      const topPosts = result.data.data.children;
      const cleanedPosts = topPosts.map(post => ({
        id: post.data.id,
        thumbnail: post.data.thumbnail,
        title: post.data.title,
        subreddit: post.data.subreddit,
        url: post.data.url,
        permalink: `https://reddit.com${post.data.permalink}`
      }));
      this.setState({ posts: cleanedPosts });
    } catch (err) {
      alert(
        "subreddit does not exist; please try again with a valid subreddit"
      );
    }
  }

  render() {
    const onSubmitSubredditField = event => {
      event.preventDefault();
      const subName = document.getElementById("subName").value;
      this.callRedditApi(subName);
    };

    return (
      <div className="reddit">
        <header className="header">
          <h1>Custom Reddit Viewer</h1>
          <form className="form" onSubmit={onSubmitSubredditField}>
            <TextField
              id="subName"
              className="textfield"
              defaultValue="all"
              label="Enter subreddit name"
            />
          </form>
        </header>
        {this.state.posts && (
          <TableContainer component={Paper}>
            <Table className="table">
              <TableHead>
                <TableRow>
                  <TableCell width="150px">Thumbnail</TableCell>
                  <TableCell>Post Title</TableCell>
                  <TableCell width="100px">Subreddit</TableCell>
                  <TableCell width="75px">Links</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.posts.map(post => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <img src={post.thumbnail} alt="selfpost" />
                    </TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.subreddit}</TableCell>
                    <TableCell>
                      <a href={post.url}>Link</a>
                      {"   "}
                      <a href={post.permalink}>Comments</a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  }
}
