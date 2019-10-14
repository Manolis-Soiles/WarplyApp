import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchJson} from './src/fetchJson';



class Map extends React.Component {

  componentDidMount() {
      this.props.fetchJson();
  }
  
  render() {
        return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
          draggable
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
        />
        </MapView>
      </View>
    );
  }
}

Map.propTypes = {
  fetchJson: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});

const mapStateToProps = state => {
  return{
    list: state
  };
};

export default connect(mapStateToProps, {fetchJson})(Map);
