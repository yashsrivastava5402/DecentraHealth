import 'package:decentrahealth/Screens/LoginScreen.dart';
import 'package:flutter/material.dart';
import 'package:decentrahealth/Widgets/RoundTextButton.dart';
import 'package:decentrahealth/Screens/LoginScreen.dart';
import 'package:decentrahealth/constants.dart';
class WelcomeScreen extends StatelessWidget {
// Future pushPatientLoginScreen(BuildContext context){
//   return
// }
var Isuser;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
            children: [
              WelcomeHeadingText(),
              SizedBox(height: 100.0,),
              RoundTextButton(
              label: 'Patient',
              whenPressed: (){
                Isuser=Users.patient;
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => PatientLoginScreen(user: Isuser,)),
                );
              },
              ),
              RoundTextButton(
                label: 'Doctor',
                whenPressed: (){
                  Isuser=Users.doctor;
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => PatientLoginScreen(user: Isuser, )),
                  );
                },
              ),

            ],
          ),
        ),
      ),
    );
  }
}

class WelcomeHeadingText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        // Stroked text as border.
        Text(
          'YOU \nARE?',
          style: TextStyle(
            fontSize: 70,
            fontWeight: FontWeight.w900,
              letterSpacing: 8.0,
            foreground: Paint()
              ..style = PaintingStyle.stroke
              ..strokeWidth = 6
              ..color = Colors.blueAccent,
          ),
        ),
        // Solid text as fill.
        Text(
          'YOU \nARE?',
          style: TextStyle(
            fontWeight: FontWeight.w900,
              letterSpacing: 8.0,
            fontSize: 70,
            color: Color(0xFF76cbfc),
          ),
        ),
      ],
    );
  }
}
