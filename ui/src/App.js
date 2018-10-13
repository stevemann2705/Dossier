import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {Card, CardTitle, } from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Web3 from 'web3';
import ReactDOM from 'react-dom'

const toolbarstyle = {
	backgroundColor:"rgb(150, 200, 255)"

}
const titlestyle = {
	fontFamily:"Copperplate Gothic",
	fontSize : 35,
	color : "#010080",
	fontWeight : "bold" 
	
}

var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/3HIy0UXtg8xxVIu0PY0O'));
var DossierAlpha = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_X_english",
				"type": "uint256"
			},
			{
				"name": "_X_maths",
				"type": "uint256"
			},
			{
				"name": "_X_science",
				"type": "uint256"
			},
			{
				"name": "_X_social_science",
				"type": "uint256"
			},
			{
				"name": "_X_computer_science",
				"type": "uint256"
			},
			{
				"name": "_X_percentage",
				"type": "uint256"
			},
			{
				"name": "_X_cgpa",
				"type": "uint256"
			}
		],
		"name": "set_marks_X",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_XII_computer_science",
				"type": "uint256"
			}
		],
		"name": "set_marks_XII_computer_science",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_X_computer_science",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_data",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_subject_code",
				"type": "uint256"
			},
			{
				"name": "_marks",
				"type": "uint256"
			}
		],
		"name": "set_marks_BTech",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_X_social_science",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_name_mother",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_XII_percentage",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_name_father",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_subject_code",
				"type": "uint256"
			}
		],
		"name": "get_marks_BTech",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_name_father",
				"type": "string"
			},
			{
				"name": "_name_mother",
				"type": "string"
			}
		],
		"name": "set_data",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_X_cgpa",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_X_percentage",
				"type": "uint256"
			}
		],
		"name": "set_marks_X_percentage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_X_cgpa",
				"type": "uint256"
			}
		],
		"name": "set_marks_X_cgpa",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_X_maths",
				"type": "uint256"
			}
		],
		"name": "set_marks_X_maths",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_X_percentage",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_XII_english",
				"type": "uint256"
			}
		],
		"name": "set_marks_XII_english",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_X_science",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_X_maths",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_XII",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_XII_english",
				"type": "uint256"
			},
			{
				"name": "_XII_maths",
				"type": "uint256"
			},
			{
				"name": "_XII_physics",
				"type": "uint256"
			},
			{
				"name": "_XII_chemistry",
				"type": "uint256"
			},
			{
				"name": "_XII_computer_science",
				"type": "uint256"
			},
			{
				"name": "_XII_percentage",
				"type": "uint256"
			}
		],
		"name": "set_marks_XII",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_XII_maths",
				"type": "uint256"
			}
		],
		"name": "set_marks_XII_maths",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_XII_physics",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_X_english",
				"type": "uint256"
			}
		],
		"name": "set_marks_X_english",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_XII_computer_science",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_X_social_science",
				"type": "uint256"
			}
		],
		"name": "set_marks_X_social_science",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_XII_percentage",
				"type": "uint256"
			}
		],
		"name": "set_marks_XII_percentage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_X_english",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_name_father",
				"type": "string"
			}
		],
		"name": "set_name_father",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_XII_maths",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_XII_english",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_X_science",
				"type": "uint256"
			}
		],
		"name": "set_marks_X_science",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_XII_physics",
				"type": "uint256"
			}
		],
		"name": "set_marks_XII_physics",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_XII_chemistry",
				"type": "uint256"
			}
		],
		"name": "set_marks_XII_chemistry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_X_computer_science",
				"type": "uint256"
			}
		],
		"name": "set_marks_X_computer_science",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_X",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_name_mother",
				"type": "string"
			}
		],
		"name": "set_name_mother",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			}
		],
		"name": "get_marks_XII_chemistry",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roll_number",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "set_name",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]);

var Dossier = DossierAlpha.at('0xE86f0FAad943Fe76F0D13738f68858b74f0E4E9a');
var a = Dossier.get_data(8214902016);
var b = Dossier.get_marks_X_english(8214902016);
console.log(a);
console.log(b);  // test code

const cardstyle =
{
  textAlign: 'left'
}

const buttonstyle =
{
	backgroundColor : "rgb(150, 200, 255)"
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Toolbar style={toolbarstyle}> 
        <img alt="Dossier" src="https://i.imgur.com/Nkh7qZd.png" />
<ToolbarTitle style={titlestyle} text="DOSSIER" > </ToolbarTitle>

<TextField 
backgroundColor="white"
ref="ei" align='center' hintText="Search here" />

<FlatButton label="Search" 
backgroundColor="white"
onClick={ () => {
var resultarray = Dossier.get_marks_XII(this.refs.ei.input.value);
this.refs.tenglish.input.value = resultarray[0];
this.refs.tmaths.input.value = resultarray[1];
this.refs.tphysics.input.value = resultarray[2];
this.refs.tchemistry.input.value = resultarray[3];
this.refs.tcs.input.value = resultarray[4];
var dataarray = Dossier.get_data(this.refs.ei.input.value);
this.refs.st_name.input.value = dataarray[0];

} 
}
/>


</Toolbar>
<Paper zDepth='3'>
<Card>
  <CardTitle><strong>Student academic details</strong></CardTitle>
<img alt="ETH logo" align="center" src="https://cdn-images-1.medium.com/max/256/1*h0DFnjYAFAZIYoJ_d4-qwQ.png"
    
/>
<TextField ref = "st_name" defaultValue="" />

);
<table align="center">
	<tr>
		<td>
<p>English</p> </td> <td><TextField ref="tenglish"
      disabled={true}
 
defaultValue={0} /> 
</td>
<td><FlatButton label="Change" /> </td>
</tr>
<tr>
	<td>
<p>Maths</p> </td><td> <TextField ref="tmaths"
      disabled={true}
 
defaultValue={0} />
</td>
<td><FlatButton label="Change" /> </td>
</tr>
<tr>
	<td>
<p>Physics</p></td><td> <TextField ref="tphysics"
      disabled={true}
 
defaultValue={0} />
</td>
<td><FlatButton label="Change" /> </td>
</tr>
<tr>
	<td>
<p>Chemistry</p></td> <td> <TextField ref="tchemistry"
      disabled={true}
 
defaultValue={0} />
</td>
<td><FlatButton label="Change" /> </td>
</tr>
<tr>
	<td>
<p>Computer Science</p></td><td><TextField ref="tcs"
      disabled={true}
 
defaultValue={0} />
</td>
<td><FlatButton label="Change" /> </td>
</tr>
</table>
  </Card>
          </Paper>
		  <table align="center">
			  <tr> 
				  <td>     <RaisedButton label="X Marks" style={buttonstyle} />
 </td> <td> <RaisedButton label="XII Marks" style={buttonstyle}/> </td>
				  </tr>
				  </table>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
