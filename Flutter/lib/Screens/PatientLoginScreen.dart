import 'package:decentrahealth/Screens/PatientLoggedInScreen.dart';
import 'package:decentrahealth/Widgets/RoundTextButton.dart';
import 'package:flutter/material.dart';




class PatientLoginScreen extends StatefulWidget {


  @override
  State<PatientLoginScreen> createState() => _PatientLoginScreenState();
}

class _PatientLoginScreenState extends State<PatientLoginScreen> {
  String? patientId;
  String? patientPassword;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text("Patient Login Page"),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            PatientImage(),
            Padding(
              //padding: const EdgeInsets.only(left:15.0,right: 15.0,top:0,bottom: 0),
              padding: EdgeInsets.symmetric(horizontal: 15),
              child: TextField(
                onChanged: (value){
                  patientId=value;
                },
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: 'Patient ID',
                    // hintText: 'Enter valid email id as abc@gmail.com'
                  ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(
                  left: 15.0, right: 15.0, top: 15, bottom: 0),
              //padding: EdgeInsets.symmetric(horizontal: 15),
              child: TextField(onChanged: (value){
                patientPassword=value;
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
                label: 'Login',
                whenPressed: (){
              Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=>PatientLoggedInScreen()));
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

class PatientImage extends StatelessWidget {
  const PatientImage({
    Key? key,
  }) : super(key: key);

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
            child: Image.asset('asset/images/patient_logo.png')),
      ),
    );
  }
}
