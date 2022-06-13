// ignore_for_file: prefer_const_constructors

// import 'package:faym/network_service/auth_service/phone_auth_state.dart';
// import 'package:faym/view_model/authentication_state.dart';
// import 'package:faym/view_model/homeview_model.dart';
import 'package:decentrahealth/Screens/verify_phoneNo_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../theme/colors.dart';
// import 'package:loading_overlay/loading_overlay.dart';
// import 'package:provider/provider.dart';

// import '../../theme/app_theme.dart';
class LogInScreen extends StatefulWidget {
  const LogInScreen({Key? key}) : super(key: key);

  @override
  State<LogInScreen> createState() => _LogInScreenState();
}

class _LogInScreenState extends State<LogInScreen> {
  final phoneTextController = TextEditingController();
  @override
  void initState() {
    super.initState();
    // Future.microtask(() => context.read<HomeViewModel>().getCategories());
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return GestureDetector(
      onTap: () => FocusManager.instance.primaryFocus?.unfocus(),
      child: Scaffold(
        resizeToAvoidBottomInset: false,
        body: Padding(
          padding: const EdgeInsets.only(left: 25, right: 25, top: 60),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text(
                'Welcome to',
                style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.w500,
                    color: Color(0xff413945)),
              ),
              RichText(
                  text: const TextSpan(children: [
                TextSpan(
                    style: TextStyle(
                        color: appLogInTitleColor,
                        fontWeight: FontWeight.w700,
                        fontStyle: FontStyle.normal,
                        height: 1.2,
                        letterSpacing: 3,
                        fontSize: 28.0),
                    text: "FAYM!"),
                TextSpan(
                    style: TextStyle(
                        color: Color(0xff413945),
                        fontWeight: FontWeight.w600,
                        fontStyle: FontStyle.normal,
                        fontSize: 28.0),
                    text: "!!!")
              ])),
              const Spacer(
                flex: 1,
              ),
              Flexible(
                  flex: 6,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Flexible(
                        child: TextField(
                          maxLength: 10,
                          maxLengthEnforcement: MaxLengthEnforcement.enforced,
                          keyboardType: TextInputType.phone,
                          controller: phoneTextController,
                          style: const TextStyle(color: brownishGrey),
                          decoration: const InputDecoration(
                              counterText: '',
                              prefixText: '+91  ',
                              labelText: 'Enter Mobile no'),
                        ),
                      ),
                      const Text(
                        'OTP will be sent to this number',
                        style: TextStyle(
                            color: blueyGrey, fontSize: 12, height: 2.2),
                      ),
                      const SizedBox(
                        height: 16,
                      ),
                      ElevatedButton(
                          onPressed: () async {
                            print(phoneTextController.text);
                            // context.read<AuthenticationState>().verifyPhone(
                            //     '+91' + phoneTextController.text);

                            // context.pushNamed(RoutesName.phoneVerificationScreen);
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) =>
                                        PhoneVerificationScreen(
                                          phoneNo:
                                              '+91 ' + phoneTextController.text,
                                        )));
                          },
                          child: const Text('Send OTP')),
                    ],
                  )),
              const Spacer(
                flex: 4,
              )
            ],
          ),
        ),
      ),
    );
  }
}
