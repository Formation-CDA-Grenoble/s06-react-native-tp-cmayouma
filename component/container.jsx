import React from 'react';
import {View,Text} from 'react-native';
import Axios from 'axios';


  export default class container extends React.compenent {
      state = {
          name: ""
      }
  }

Axios.get('https://randomuser.me/api/')
  .then(response => {
    console.log(response.data);
  })
}

  
  render() {
return(

<View style={styles.container}>
<Text>Open up App.js to start working on your app!</Text>
</View>
)
}
}