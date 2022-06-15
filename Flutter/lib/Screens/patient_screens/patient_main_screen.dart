import 'package:decentrahealth/theme/app_theme.dart';
import 'package:flutter/material.dart';

class PatientMainScreen extends StatelessWidget {
  const PatientMainScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: primaryColor,
        label: const Text('Add Member'),
        icon: const Icon(Icons.add),
        onPressed: (() {}),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 15),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text(
                'Members:',
                style: TextStyle(
                    color: primaryColor,
                    fontWeight: FontWeight.w700,
                    fontStyle: FontStyle.normal,
                    height: 1.2,
                    letterSpacing: 3,
                    fontSize: 28.0),
              ),
              const Divider(),
              const SizedBox(
                height: 20,
              ),
              SingleChildScrollView(
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: List.generate(
                      4,
                      (index) => Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: GestureDetector(
                          onTap: () {},
                          child: Container(
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 20),
                              alignment: Alignment.centerLeft,
                              height: 50,
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: const [
                                  Text(
                                    'Patient',
                                    style: TextStyle(
                                      color: primaryColor,
                                      fontWeight: FontWeight.w400,
                                      fontStyle: FontStyle.normal,
                                      height: 1.2,
                                      //  letterSpacing: 3,
                                      //  fontSize: 28.0),
                                    ),
                                  ),
                                  Icon(Icons.arrow_right_alt_rounded)
                                ],
                              ),
                              width: double.infinity,
                              decoration: BoxDecoration(
                                  color: secondaryColor,
                                  borderRadius: BorderRadius.circular(15))),
                        ),
                      ),
                    )),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
