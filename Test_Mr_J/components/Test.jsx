import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { mathtoken } from '../Token'
import typer from '../type'


const Test = () => {
  const [data,setdata]=useState([])
  const [from,setfrom]=useState('')
  const [trr,settr]=useState('')
  const [i,seti]=useState(0)
  const uri=`https://api.mymemory.translated.net/get?q=${from}&langpair=en|uz`
  useEffect(()=>{
    
    fetch(`${mathtoken}${19}&type=boolean`)
    .then(r=>r.json())
    .then(d=>{setdata(d)})
    console.log("hhhhhhhhh-----",);
  },[])
  function tr(){
    // setfrom(data.results[i].question)
    fetch(uri)
    .then(r=>r.json())
    .then(d=>console.log(d))

  }
  // {data.results[0]}
  return (
    <View style={{flex:1,marginTop:50,display:"flex",justifyContent:"center",alignItems:"center"}}>

    <View>
      <Text style={{fontSize:25}}></Text>
    </View>
    <View>
      <TouchableOpacity style={{width:200,height:40,backgroundColor:"blue",borderRadius:7,borderWidth:2}}>
        <Text style={{fontSize:25}}>To'gri</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:200,height:40,backgroundColor:"blue",borderRadius:7,borderWidth:2,marginTop:10}}>
        <Text style={{fontSize:25}}>Noto'gri</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Test