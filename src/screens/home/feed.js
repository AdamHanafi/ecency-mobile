import React from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import {
  Container,
  Header,
  Button,
  Thumbnail,
  Right,
  Text,
  Tabs,
  Tab,
  Icon,
  ScrollableTab,
} from "native-base";
import styles from "../../styles/feed.styles";
// STEEM
import { getPosts } from "../../providers/steem/dsteem";

// LIBRARIES
import Placeholder from "rn-placeholder";

// COMPONENTS
import { PostCard } from "../../components/postCard";
import { FilterBar } from "../../components/filterBar";

import { CollapsibleCard } from "../../components/collapsibleCard";
/* eslint-enable no-unused-vars */

class FeedPage extends React.Component {
  constructor(props) {
    super(props);

    this.getFeed = this.getFeed.bind(this);
    this.getMore = this.getMore.bind(this);
    this.refreshPosts = this.refreshPosts.bind(this);
    this.state = {
      isReady: false,
      posts: [],
      start_author: "",
      start_permlink: "",
      refreshing: false,
      loading: false,
    };
  }

  componentWillMount() {
    this.getFeed();
  }

  getFeed = () => {
    getPosts(
      "feed",
      { tag: this.props.user.name, limit: 10 },
      this.props.user.name
    )
      .then(result => {
        // TODO: We should put null check for result
        this.setState({
          isReady: true,
          posts: result,
          start_author: result[result.length - 1].author,
          start_permlink: result[result.length - 1].permlink,
          refreshing: false,
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  getMore = () => {
    this.setState({ loading: true });
    getPosts(
      "feed",
      {
        tag: this.props.user.name,
        limit: 10,
        start_author: this.state.start_author,
        start_permlink: this.state.start_permlink,
      },
      this.props.user.name
    ).then(result => {
      let posts = result;
      posts.shift();
      this.setState({
        posts: [...this.state.posts, ...posts],
        start_author: result[result.length - 1].author,
        start_permlink: result[result.length - 1].permlink,
      });
    });
  };

  refreshPosts = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.getFeed();
      }
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View style={styles.flatlistFooter}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CollapsibleCard title="Customized Card 1" expanded={true}>
          <Text>Hello, this is first line.</Text>
          <Text>Hello, this is second line.</Text>
          <Text>Hello, this is third line.</Text>
          <Text>Hello, this is first line.</Text>
          <Text>Hello, this is second line.</Text>
          <Text>Hello, this is third line.</Text>
          <Text>Hello, this is first line.</Text>
          <Text>Hello, this is second line.</Text>
          <Text>Hello, this is third line.</Text>
        </CollapsibleCard>
        {/* {this.state.isReady && (
          <FilterBar
            dropdownIconName="md-arrow-dropdown"
            options={[
              "ALL NOTIFICATION",
              "LATEST NOTF",
              "ESTEEMAPP",
              "UGUR ERDAL",
              "ONLY YESTERDAY",
            ]}
            defaultText="NEW POST"
            rightIconName="md-apps"
          />
        )}
        {this.state.isReady ? (
          <FlatList
            data={this.state.posts}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <PostCard
                componentId={this.props.componentId}
                content={item}
                user={this.props.user}
                isLoggedIn={true}
              />
            )}
            keyExtractor={(post, index) => index.toString()}
            onEndReached={this.getMore}
            removeClippedSubviews={true}
            refreshing={this.state.refreshing}
            onRefresh={() => this.refreshPosts()}
            onEndThreshold={0}
            initialNumToRender={10}
            ListFooterComponent={this.renderFooter}
          />
        ) : (
          <View>
            <View style={styles.placeholder}>
              <Placeholder.ImageContent
                size={60}
                animate="fade"
                lineNumber={4}
                lineSpacing={5}
                lastLineWidth="30%"
                onReady={this.state.isReady}
              />
            </View>
            <View style={styles.placeholder}>
              <Placeholder.ImageContent
                size={60}
                animate="fade"
                lineNumber={4}
                lineSpacing={5}
                lastLineWidth="30%"
                onReady={this.state.isReady}
              />
            </View>
            <View style={styles.placeholder}>
              <Placeholder.ImageContent
                size={60}
                animate="fade"
                lineNumber={4}
                lineSpacing={5}
                lastLineWidth="30%"
                onReady={this.state.isReady}
              />
            </View>
          </View>
        )} */}
      </View>
    );
  }
}

export default FeedPage;
