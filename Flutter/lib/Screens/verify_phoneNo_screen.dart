import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:sms_autofill/sms_autofill.dart';

import '../theme/colors.dart';
// import 'package:sms_autofill/sms_autofill.dart';

// import '../../get_it_dependecy/locator.dart';
// import '../../view_model/authentication_state.dart';

class PhoneVerificationScreen extends StatefulWidget {
  PhoneVerificationScreen({Key? key, required this.phoneNo}) : super(key: key);
  String phoneNo = '1';
  @override
  State<PhoneVerificationScreen> createState() =>
      _PhoneVerificationScreenState();
}

class _PhoneVerificationScreenState extends State<PhoneVerificationScreen> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  String? smsCode;
  String? _verificationId;

  @override
  void initState() {
    // listenForSms();
    super.initState();
    verifyPhoneNumber();
  }

  // listenForSms() async {
  //   await SmsAutoFill().listenForCode();
  // }

  void verifyPhoneNumber() async {
//     // ignore: prefer_function_declarations_over_variables
//     PhoneVerificationCompleted verificationCompleted =
//         (PhoneAuthCredential phoneAuthCredential) async {
//       await _auth.signInWithCredential(phoneAuthCredential);
//       showSnackbar(
//           "Phone number automatically verified and user signed in: ${_auth.currentUser!.uid}");
//     };

// // ignore: prefer_function_declarations_over_variables
//     PhoneVerificationFailed verificationFailed =
//         (FirebaseAuthException authException) {
//       showSnackbar(
//           'Phone number verification failed. Code: ${authException.code}. Message: ${authException.message}');
//     };

//    // ignore: prefer_function_declarations_over_variables
//     Future<void> Function(String verificationId, [int forceResendingToken])
//         codeSent = (String verificationId, [int forceResendingToken]) async {
//       showSnackbar('Please check your phone for the verification code.');
//       _verificationId = verificationId;
//     };

    // ignore: prefer_function_declarations_over_variables
    PhoneCodeAutoRetrievalTimeout codeAutoRetrievalTimeout =
        (String verificationId) {
      showSnackbar("verification code: " + verificationId);
      _verificationId = verificationId;
    };
    try {
      await _auth.verifyPhoneNumber(
          phoneNumber: widget.phoneNo,
          timeout: const Duration(seconds: 5),
          verificationCompleted:
              (PhoneAuthCredential phoneAuthCredential) async {
            await _auth.signInWithCredential(phoneAuthCredential);
            showSnackbar(
                "Phone number automatically verified and user signed in: ${_auth.currentUser!.uid}");
          },
          verificationFailed: (FirebaseAuthException authException) {
            showSnackbar(
                'Phone number verification failed. Code: ${authException.code}. Message: ${authException.message}');
          },
          codeSent: (String verificationId, int? forceResendingToken) async {
            showSnackbar('Please check your phone for the verification code.');
            _verificationId = verificationId;
          },
          codeAutoRetrievalTimeout: codeAutoRetrievalTimeout);
    } catch (e) {
      showSnackbar("Failed to Verify Phone Number: $e");
    }
  }

  void showSnackbar(String message) {
    var snackBar = SnackBar(
      content: Text(message),
    );
    ScaffoldMessenger.of(context).showSnackBar(snackBar);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusManager.instance.primaryFocus?.unfocus(),
      child: Scaffold(
        body: Padding(
          padding: const EdgeInsets.only(top: 90, left: 25, right: 25),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text(
                'Enter OTP',
                style: TextStyle(
                  fontSize: 28,
                  height: 1.2,
                  fontWeight: FontWeight.bold,
                  color: Color(0xff413945),
                ),
              ),
              const SizedBox(
                height: 8,
              ),
              const Text("An OTP has been sent to you mobile number.",
                  style: TextStyle(
                      color: brownishGrey,
                      fontWeight: FontWeight.w400,
                      height: 1.5,
                      fontStyle: FontStyle.normal,
                      fontSize: 16.0),
                  textAlign: TextAlign.left),
              const SizedBox(
                height: 20,
              ),
              PinFieldAutoFill(
                  onCodeChanged: (val) {
                    // if (val != null) authService.smsCode = val;
                    smsCode = val;
                  },
                  // onCodeSubmitted: (val) {
                  //   // authService.smsCode = val;
                  //   // authService.verifyViaOTp();
                  //   smsCode = val;

                  // },
                  codeLength: 6,
                  cursor: Cursor(
                      width: 2,
                      color: Theme.of(context).primaryColor,
                      enabled: true),
                  decoration: UnderlineDecoration(
                      gapSpace: 10,
                      lineHeight: 1,
                      textStyle: TextStyle(
                          color: Theme.of(context).primaryColor, fontSize: 16),
                      hintText: '------',
                      hintTextStyle: TextStyle(
                          color:
                              Theme.of(context).primaryColor.withOpacity(0.4),
                          fontSize: 16),
                      colorBuilder: PinListenColorBuilder(
                          Theme.of(context).primaryColor,
                          Theme.of(context).primaryColor.withOpacity(0.4)))),
              RichText(
                  text: TextSpan(children: [
                const TextSpan(
                    style: TextStyle(
                        color: Color(0xff828282),
                        fontWeight: FontWeight.w400,
                        height: 2.5,
                        fontStyle: FontStyle.normal,
                        fontSize: 12.0),
                    text: "Not received yet? "),
                TextSpan(
                    style: TextStyle(
                        color: Theme.of(context).primaryColor,
                        fontWeight: FontWeight.w700,
                        fontStyle: FontStyle.normal,
                        fontSize: 12.0),
                    text: "Resend again")
              ])),
              const SizedBox(
                height: 30,
              ),
              ElevatedButton(
                  onPressed: () async {
                    // authService.verifyViaOTp();
                    // await controller.verifyOTP(otp: smsCode!);
                    // context.pushNamed(RoutesName.chooseDomainScreen);
                  },
                  child: const Text('Verify OTP')),
            ],
          ),
        ),
      ),
    );
  }
}
