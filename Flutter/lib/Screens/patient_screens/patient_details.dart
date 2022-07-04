import 'package:decentrahealth/models/hospital_class.dart';
import 'package:decentrahealth/utils/shared_pref.dart';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

import '../../models/patient_class.dart';
import '../../theme/colors.dart';

class PatientDetailsScreen extends StatefulWidget {
  int patientIndex;
  List<Patient> patientList;
  PatientDetailsScreen(
      {required this.patientIndex, required this.patientList, Key? key})
      : super(key: key);

  @override
  State<PatientDetailsScreen> createState() => _PatientDetailsScreenState();
}

class _PatientDetailsScreenState extends State<PatientDetailsScreen> {
  int tab = 0;
  Patient patient = Patient();
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    patient = widget.patientList[widget.patientIndex];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: Padding(
        padding: const EdgeInsets.only(top: 40),
        child: Column(
          children: [
            PatientCard(
              name: patient.name!,
              aadhar: patient.aadhar!,
              gender: patient.gender!,
              age: patient.age!,
            ),
            OfferScreenTab(
              active: tab,
              onSelectTab: (val) {
                setState(() {
                  tab = val;
                });
              },
            ),
            const Divider(
              height: 0,
              endIndent: 30,
              indent: 30,
            ),
            const SizedBox(
              height: 15,
            ),
            Expanded(
              child:
                  tab == 0 ? const PatientDocuments() : const HospitalApply(),
            )
          ],
        ),
      ),
    ));
  }
}

class PatientDocuments extends StatelessWidget {
  // int patientIndex;
  // List<Patient> patientList;
  const PatientDocuments({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}

class HospitalApply extends StatefulWidget {
  const HospitalApply({Key? key}) : super(key: key);

  @override
  State<HospitalApply> createState() => _HospitalApplyState();
}

class _HospitalApplyState extends State<HospitalApply> {
  @override
  void initState() {
    super.initState();
    _phoneNum = SharedPrefs.getPhoneNum() ?? '';
    dataFuture = getHospitals();
    getHospitals();
    // Provider.of<HomeViewModel>(context).updatePhoneNo('$_phoneNum');
  }

  String? _phoneNum;
  // late List<Patient> patientList;
  late List<Hospitals> _hospitalList;
  late Future<List<Hospitals>> dataFuture;

  Future<List<Hospitals>> getHospitals() async {
    print('shared pref' + _phoneNum!);
    var res = await Dio().get(
      'http://localhost:8000/getHospitals',
    );
    // patientList = (res.data as List).map((e) => Patient.fromJson(e)).toList();
    _hospitalList =
        (res.data as List).map((e) => Hospitals.fromJson(e)).toList();
    return _hospitalList;
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: dataFuture,
        builder: (context, AsyncSnapshot<List<Hospitals>> snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            return ListView.builder(
                itemCount: snapshot.data!.length,
                itemBuilder: ((context, index) {
                  Hospitals hospital = snapshot.data![index];
                  return HospitalCard(
                    name: hospital.name!,
                    type: hospital.type!,
                    regNo: hospital.regNo!,
                  );
                }));
          } else {
            return const Text('Loading...');
          }
        });
  }
}

class OfferScreenTab extends StatelessWidget {
  final int active;
  final Function(int) onSelectTab;
  const OfferScreenTab({Key? key, this.active = 0, required this.onSelectTab})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var activeColor = primaryColor;
    var inactiveColor = textSecondary;
    var activeTextStyle = const TextStyle(
        fontSize: 16, fontWeight: FontWeight.w700, color: primaryColor);
    var inactiveTextStyle = TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.w600,
        color: textSecondary.withOpacity(0.5));

    return Container(
      height: 60,
      alignment: Alignment.center,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: GestureDetector(
              behavior: HitTestBehavior.translucent,
              onTap: () => onSelectTab(0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    ' Patient Documents',
                    style: active == 0 ? activeTextStyle : inactiveTextStyle,
                  )
                ],
              ),
            ),
          ),
          const VerticalDivider(
            indent: 15,
            thickness: 1,
            endIndent: 15,
          ),
          Expanded(
            child: GestureDetector(
              behavior: HitTestBehavior.translucent,
              onTap: () => onSelectTab(1),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    ' Hospital Apply',
                    style: active == 1 ? activeTextStyle : inactiveTextStyle,
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class PatientCard extends StatelessWidget {
  PatientCard(
      {this.name = 'Bhagat Chandra Hospital',
      this.aadhar = '1245',
      this.gender = 'Private',
      this.age = '12',
      Key? key})
      : super(key: key);
  String name;
  String aadhar;
  String gender;
  String age;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Center(
      child: Card(
        margin: const EdgeInsets.symmetric(vertical: 10),
        elevation: 5,
        color: Theme.of(context).colorScheme.surfaceVariant,
        child: SizedBox(
          width: size.width * 0.85,
          height: 150,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Flexible(
                  child: Text(
                    name,
                    style: const TextStyle(
                        decoration: TextDecoration.underline,
                        color: primaryColor,
                        fontWeight: FontWeight.w700,
                        fontStyle: FontStyle.normal,
                        height: 1.2,
                        letterSpacing: 3,
                        fontSize: 25.0),
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Row(
                      children: [
                        Text(
                          'Gender: ' + gender,
                          style: const TextStyle(
                              color: primaryColor,
                              fontWeight: FontWeight.w500,
                              fontStyle: FontStyle.normal,
                              height: 1.2,
                              letterSpacing: 1,
                              fontSize: 16),
                        ),
                        Icon(
                          gender == 'Male' ? Icons.male : Icons.female,
                          size: 16,
                          color: primaryColor,
                        )
                      ],
                    ),
                    const VerticalDivider(),
                    Flexible(
                      child: Text(
                        'Aadhar: ' + aadhar,
                        style: const TextStyle(
                            color: primaryColor,
                            fontWeight: FontWeight.w500,
                            fontStyle: FontStyle.normal,
                            height: 1.2,
                            letterSpacing: 1,
                            fontSize: 16),
                      ),
                    ),
                  ],
                ),
                Text(
                  'Age: ' + age,
                  style: const TextStyle(
                      color: primaryColor,
                      fontWeight: FontWeight.w500,
                      fontStyle: FontStyle.normal,
                      height: 1.2,
                      letterSpacing: 1,
                      fontSize: 16),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class HospitalCard extends StatelessWidget {
  HospitalCard(
      {this.name = 'Bhagat Chandra Hospital',
      this.regNo = '1245',
      this.type = 'Private',
      Key? key})
      : super(key: key);
  String name;
  String regNo;
  String type;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Center(
      child: Card(
        margin: const EdgeInsets.symmetric(vertical: 10),
        elevation: 5,
        color: Theme.of(context).colorScheme.surfaceVariant,
        child: SizedBox(
          width: size.width * 0.85,
          height: 150,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Flexible(
                  child: Text(
                    name,
                    style: const TextStyle(
                        color: primaryColor,
                        fontWeight: FontWeight.w700,
                        fontStyle: FontStyle.normal,
                        height: 1.2,
                        letterSpacing: 3,
                        fontSize: 16.0),
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Text(
                      'Type: ' + type,
                      style: const TextStyle(
                          color: primaryColor,
                          fontWeight: FontWeight.w500,
                          fontStyle: FontStyle.normal,
                          height: 1.2,
                          letterSpacing: 1,
                          fontSize: 14),
                    ),
                    Text(
                      'Registration No: ' + regNo,
                      style: const TextStyle(
                          color: primaryColor,
                          fontWeight: FontWeight.w500,
                          fontStyle: FontStyle.normal,
                          height: 1.2,
                          letterSpacing: 1,
                          fontSize: 14),
                    ),
                  ],
                ),
                Align(
                  alignment: Alignment.bottomRight,
                  child: TextButton(
                      onPressed: () {},
                      child: const Text(
                        'Apply',
                        style: TextStyle(
                            decoration: TextDecoration.underline,
                            color: primaryColor,
                            fontWeight: FontWeight.w800,
                            fontStyle: FontStyle.normal,
                            height: 1.2,
                            letterSpacing: 1,
                            fontSize: 14),
                      )),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
