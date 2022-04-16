import 'package:decentrahealth/Screens/LoggedInScreen.dart';
import 'package:decentrahealth/Widgets/RoundTextButton.dart';
import 'package:decentrahealth/constants.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:decentrahealth/Screens/WelcomeScreen.dart';


class PatientLoginScreen extends StatefulWidget {
  var user;
PatientLoginScreen({this.user});
  @override
  State<PatientLoginScreen> createState() => _PatientLoginScreenState();
}

class _PatientLoginScreenState extends State<PatientLoginScreen> {
  String? Id;
  String? Password;
  Future<void> dataWrite()async{
    var url = Uri.parse('http://10.0.2.2:8000/doctorLogin');
    http.Response response = await http.post(url, body: {'email': 'cramblegod', 'password': 'crambleisagod'});
  print('...........');
    print('Response status: ${response.statusCode}');
    print('Response body: ${response.body}');
    print('...........');
    // print(await http.read(Uri.parse('http://localhost:8000/doctorLogin')));
  }
  @override
  Widget build(BuildContext context) {
    // print('${widget.user.toString().substring(6)[0].toUpperCase()}${widget.user.toString().substring(7)}');
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: widget.user==Users.patient?Text("Patient Login Page"):Text("Doctor Login Page"),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            LogoImage(user: widget.user,),
            Padding(
              //padding: const EdgeInsets.only(left:15.0,right: 15.0,top:0,bottom: 0),
              padding: EdgeInsets.symmetric(horizontal: 15),
              child: TextField(
                onChanged: (value){
                  Id=value;
                },
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: '${widget.user.toString().substring(6)[0].toUpperCase()}${widget.user.toString().substring(7)} ID',
                    // hintText: 'Enter valid email id as abc@gmail.com'
                  ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(
                  left: 15.0, right: 15.0, top: 15, bottom: 0),
              //padding: EdgeInsets.symmetric(horizontal: 15),
              child: TextField(onChanged: (value){
                Password=value;
              },
                obscureText: true,
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: 'Password',
                //    hintText: 'Enter secure password'
                ),
              ),
            ),SizedBox(height: 50.0,),
            RoundTextButton(
                label: '${widget.user.toString().substring(6)[0].toUpperCase()}${widget.user.toString().substring(7)} Login',
                whenPressed: ()async{
                  print('...........');
                  await dataWrite();
                  print('...........');
              // Navigator.push(
              //     context,
              //     MaterialPageRoute(builder: (context)=>PatientLoggedInScreen()));
            }),
            SizedBox(
              height: 130,
            ),
            Text('New User? Create Account')
          ],
        ),
      ),
    );
  }
}

class LogoImage extends StatelessWidget {
  var user;
  LogoImage({this.user});
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 60.0,bottom: 60.0,),
      child: Center(
        child: Container(
            width: 200,
            height: 150,
            /*decoration: BoxDecoration(
                color: Colors.red,
                borderRadius: BorderRadius.circular(50.0)),*/
            child: user==Users.patient?Image.asset('asset/images/patient_logo.jpeg'):Image.asset('asset/images/doctor_logo.png')),
      ),
    );
  }
}
//'http://localhost:8000/doctorLogin'