import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Dimensions, Alert } from 'react-native';
import NavBar from './src/components/NavBar';
import Card from './src/components/Card';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6EAEE',
    flex: 1
  },
  gridCardLayout: {
    backgroundColor: '#fff',
    borderRadius: 2,
    width: '48%',
    marginLeft: '1%',
    marginRight: '0.5%',
    marginBottom: '1%',
    aspectRatio: 0.75,
    paddingLeft: 15,
    paddingRight: 5
  },
  fullSizeCardLayout: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 10
  }
});
const content = [{key: '1', title: 'Trial 1', content: 'Quas nostrum quod nobis. Ipsum delectus inventore sunt ducimus vero aliquam. Totam et pariatur assumenda fugit debitis error consequuntur. Id voluptatum sed eaque tempora dolor.'}, {key: '2', title: 'Heading 2', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'},{key: '3', title: 'Test 3', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'}, {key: '4', title: 'Short headings make up for content', content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'}, {key: '5', title: 'Latin headings aren\'t worth it, so I went with English', content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}, {key: '6', title: 'Heading 6', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}];

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerStyle: [styles.gridCardLayout],
      horizontal: false,
      pagingEnabled: false,
      showsHorizontalScrollIndicator: false,
      gridLayout: true,
      contentContainerStyle: {paddingBottom:5, paddingTop: 10},
      titleLines: 1,
      contentLines: 12,
      refresh: false
    }
  }
  changeView() {
    if (!this.state.refresh) {
      this.setState({
        containerStyle: [styles.fullSizeCardLayout, {width: screenWidth}],
        horizontal: true,
        pagingEnabled: true,
        showsHorizontalScrollIndicator: false,
        gridLayout: false,
        contentContainerStyle: {},
        titleLines: 3,
        contentLines: 1000,
        refresh: true
      });
    } else {
      this.setState({
        containerStyle: [styles.gridCardLayout],
        horizontal: false,
        pagingEnabled: false,
        showsHorizontalScrollIndicator: false,
        gridLayout: true,
        contentContainerStyle: {paddingBottom:5, paddingTop: 10},
        titleLines: 1,
        contentLines: 12,
        refresh: false
      });
    }
  }
  gotoCard(key) {
    if (!this.state.refresh) {
      this.setState({
        containerStyle: [styles.fullSizeCardLayout, {width: screenWidth}],
        horizontal: true,
        pagingEnabled: true,
        showsHorizontalScrollIndicator: false,
        gridLayout: false,
        contentContainerStyle: {},
        titleLines: 3,
        contentLines: 1000,
        page: key,
        refresh: true
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar title="Trial" rightButton="Toggle View" handler={this.changeView.bind(this)} />
          <FlatList
          data={content}
          key = {(this.state.gridLayout) ? 'GRID' : 'FULL' }
          ref={(ref) => { this.flatListRef = ref; }}
          renderItem={({item}) =>
            <Card title={item.title} content={item.content} containerStyle ={this.state.containerStyle} titleLines={this.state.titleLines} contentLines={this.state.contentLines} handler={
            this.gotoCard.bind(this, item.key)
            }/>
          } horizontal={this.state.horizontal} numColumns={this.state.gridLayout ? 2 : 1} pagingEnabled={this.state.pagingEnabled} showsHorizontalScrollIndicator={this.state.showsHorizontalScrollIndicator} contentContainerStyle={this.state.contentContainerStyle}/>  
      </View>
    );
  }
  componentDidUpdate() {
    if (this.state.refresh) {
      setTimeout(() => {
        this.flatListRef.scrollToIndex({
          animated: true,
          index: Number.parseInt(this.state.page, 10) - 1,
          viewPosition: 0
        });
      }, 100);
    }
  }
}

