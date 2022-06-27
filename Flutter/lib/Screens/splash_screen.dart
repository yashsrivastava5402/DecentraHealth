import 'package:decentrahealth/Screens/patient_screens/patient_main_screen.dart';
import 'package:decentrahealth/Screens/welcome_screen.dart';
import 'package:flutter/material.dart';

import '../utils/shared_pref.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  String? _phoneNum = '';

  @override
  void initState() {
    super.initState();
    _phoneNum = SharedPrefs.getPhoneNum() ?? '';
    Future.delayed(const Duration(seconds: 1));
    Future.microtask(() => init());
  }

  init() async {
    print('Splash Screen' + _phoneNum!);
    _phoneNum == ''
        ? Navigator.of(context).pushAndRemoveUntil(
            MaterialPageRoute(builder: (context) => WelcomeScreen()),
            (route) => false)
        : Navigator.of(context).pushAndRemoveUntil(
            MaterialPageRoute(builder: (context) => const PatientMainScreen()),
            (route) => false);
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(child: Text('DecentraHealth')),
    );
  }
}
