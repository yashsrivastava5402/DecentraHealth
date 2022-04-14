import 'package:flutter/material.dart';

import 'Screens/WelcomeScreen.dart';

void main() {
  runApp( MaterialApp(
    home: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return WelcomeScreen();
  }
}

