import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions/counter';
import { RootState, AppDispatch } from '../redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;


const Home = () => {
    const dispatch = useDispatch();
    const counter = useAppSelector(state => state.counter.value);

    useEffect(() => {
      
        
      return () => {
        
      }
    }, [])
    

    return (
        <View style={styles.container}>
            <Text>counter: {counter}</Text>
            <Button title='plus' onPress={() => dispatch(increment(counter+1))}/>
            <Button title='minus' onPress={() => dispatch(decrement(counter-1))}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
export default Home