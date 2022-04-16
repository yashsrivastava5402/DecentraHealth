import 'package:flutter/material.dart';


class RoundTextButton extends StatelessWidget {
 String label;
 VoidCallback whenPressed;
 RoundTextButton({required this.label,required this.whenPressed});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(15.0),
      child: Container(
        height: 55,
        width: 200,
        decoration: BoxDecoration(
            color: Colors.blueAccent, borderRadius: BorderRadius.circular(20)),
        child: TextButton(
          onPressed: whenPressed,
          child: Text(
            label,
            style: TextStyle(color: Colors.white, fontSize: 25),
          ),
        ),
      ),
    );
  }
}
