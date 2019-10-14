import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, AppRegistry, StyleSheet, Text, TextInput, View, Button, ActivityIndicator } from 'react-native';
import {fetchJson} from './src/fetchJson';
import {getJsonError, getJson, getJsonPending} from './src/reducers';

class List extends Component {

    componentDidMount() {
        console.log('mount')
        console.log('Pending: ' + this.props.list.pending)
        this.props.fetchJson();
    }

    render() {

      if (this.props.list.pending){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
      return (
        <View>
        <FlatList
          data={this.props.list.pois}
          renderItem={({item}) => <Text>{item.address}</Text>}
          keyExtractor={({id}, index) => id}
        />
        </View>
      )
    }
}

List.propTypes = {
  fetchJson: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return{
    list: state
  };
};
/*
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchJson: fetchJson
}, dispatch)
*/
export default connect(mapStateToProps,{fetchJson})(List);
