import 'package:decentrahealth/Screens/patient_screens/add_patient_screen.dart';
import 'package:decentrahealth/models/home_view_model.dart';
import 'package:decentrahealth/theme/app_theme.dart';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

import '../../models/patient_class.dart';
import '../../utils/shared_pref.dart';

class PatientMainScreen extends StatefulWidget {
  const PatientMainScreen({Key? key}) : super(key: key);

  @override
  State<PatientMainScreen> createState() => _PatientMainScreenState();
}

class _PatientMainScreenState extends State<PatientMainScreen> {
  String? _phoneNum;
  @override
  void initState() {
    super.initState();
    _phoneNum = SharedPrefs.getPhoneNum() ?? '';
    dataFuture = getPatients();
  }

  late List<Patient> patientList;
  late Future<List<Patient>> dataFuture;
  Future<List<Patient>> getPatients() async {
    print('shared pref' + _phoneNum!);
    var res = await Dio().post(
        'https://decentrahealth-server.herokuapp.com/getPatients',
        data: {'Phone': ':' + _phoneNum!});
    patientList = (res.data as List).map((e) => Patient.fromJson(e)).toList();

    return patientList;
  }

  @override
  Widget build(BuildContext context) {
    setState(() {
      dataFuture = getPatients();
    });
    return Scaffold(
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: primaryColor,
        label: const Text('Add Member'),
        icon: const Icon(Icons.add),
        onPressed: (() {
          Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const AddPatientScreen()))
              .then((value) {
            if (value == 'update') {
              setState(() {
                dataFuture = getPatients();
              });
            }
          });
          setState(() {});
        }),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 15),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Divider(),
              const SizedBox(
                height: 20,
              ),
              FutureBuilder(
                  future: dataFuture,
                  builder: (context, AsyncSnapshot<List<Patient>> snapshot) {
                    if (snapshot.connectionState == ConnectionState.done) {
                      return Expanded(
                        child: ListView.builder(
                            itemCount: snapshot.data!.length,
                            itemBuilder: (context, index) {
                              return PatientTile(
                                index: index,
                                name: snapshot.data![index].name!,
                              );
                            }),
                      );
                    } else {
                      return const Text('Loading...');
                    }
                  }),
            ],
          ),
        ),
      ),
      appBar: AppBar(
        centerTitle: false,
        title: const Text(
          'Members:',
          style: TextStyle(
              color: primaryColor,
              fontWeight: FontWeight.w700,
              fontStyle: FontStyle.normal,
              height: 1.2,
              letterSpacing: 3,
              fontSize: 28.0),
        ),
        actions: [
          IconButton(
            onPressed: () {
              HomeViewModel().updatePhoneNo('sss');
              setState(() {
                dataFuture = getPatients();
              });
            },
            icon: const Icon(Icons.replay_outlined),
            color: primaryColor,
          )
        ],
      ),
    );
  }
}

class PatientTile extends StatelessWidget {
  int index;
  String name;
  PatientTile({
    required this.index,
    required this.name,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: GestureDetector(
        onTap: () {},
        child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            alignment: Alignment.centerLeft,
            height: 50,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  name,
                  style: const TextStyle(
                    color: primaryColor,
                    fontWeight: FontWeight.w400,
                    fontStyle: FontStyle.normal,
                    height: 1.2,
                    //  letterSpacing: 3,
                    //  fontSize: 28.0),
                  ),
                ),
                const Icon(Icons.arrow_right_alt_rounded)
              ],
            ),
            width: double.infinity,
            decoration: BoxDecoration(
                color: secondaryColor,
                borderRadius: BorderRadius.circular(15))),
      ),
    );
  }
}
