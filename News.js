import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [storyData, setStoryData] = useState();

  const getNews = async = () => {
    fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos',
      )
        .then(response => response.json())
        .then(stories => setStoryData(stories))
        .catch(error => console.error(error));
      setIsLoading(false);

    
  };

  useEffect(() => {
    getNews();
  }, []);
  console.log('StoryData ' + storyData);

  const newsItem = ({item}) => {
    return (
      <View style={styles.storylist}>
        <Image style={styles.thumb} source={{uri: item.url}} />
        <Text style={styles.storytext}>{item.title}</Text>
        <Text sytle={styles.storytext}>{item.url}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={storyData}
          renderItem={newsItem}
          keyExtractor={item => item.title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  storylist: {
    paddingBottom: 20,
  },
  thumb: {
    height: 100,
    width: '100%',
  },
  storytext: {
    padding: 10,
  },
});

export default News;
