import 'package:decentrahealth/Screens/signup_screens/otp_signup.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../../theme/colors.dart';

class PhoneSignup extends StatefulWidget {
  const PhoneSignup({Key? key}) : super(key: key);

  @override
  State<PhoneSignup> createState() => _PhoneSignupState();
}

class _PhoneSignupState extends State<PhoneSignup> {
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
                    text: "Decentra Health"),
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
                                    builder: (context) => OTPSignup(
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
