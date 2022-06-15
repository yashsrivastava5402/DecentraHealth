import 'package:decentrahealth/Screens/login_screen/login_screen.dart';
import 'package:decentrahealth/Screens/signup_screens/phone_signup.dart';
import 'package:decentrahealth/theme/app_theme.dart';
import 'package:flutter/material.dart';

import 'package:decentrahealth/constants.dart';
import 'package:flutter_svg/svg.dart';

class WelcomeScreen extends StatelessWidget {
// Future pushPatientLoginScreen(BuildContext context){
//   return
// }
  var Isuser;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(15.0),
          child: Center(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                SvgPicture.asset(
                  'asset/icons/doctor_patient.svg',
                  width: 500,
                ),
                WelcomeHeadingText(),
                const SizedBox(
                  height: 50.0,
                ),
                ElevatedButton(
                    onPressed: () {
                      Isuser = Users.patient;
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const PhoneSignup()),
                      );
                    },
                    child: const Text('Patient')),
                const SizedBox(height: 30),
                ElevatedButton(
                    onPressed: () {
                      Isuser = Users.doctor;
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoginScreen()),
                      );
                    },
                    child: const Text('Doctor')),
                const Spacer(),
              ],
            ),
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
              ..color = primaryColor,
          ),
        ),
        // Solid text as fill.
        const Text(
          'YOU \nARE?',
          style: TextStyle(
            fontWeight: FontWeight.w900,
            letterSpacing: 8.0,
            fontSize: 70,
            color: secondaryColor,
          ),
        ),
      ],
    );
  }
}
