import 'package:decentrahealth/Screens/welcome_screen.dart';
import 'package:decentrahealth/theme/app_theme.dart';

import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: AppTheme(context: context).themeData,
      debugShowCheckedModeBanner: false,
      home: WelcomeScreen(),
    );
  }
}
