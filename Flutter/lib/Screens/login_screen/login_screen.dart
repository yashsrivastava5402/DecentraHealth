import 'package:decentrahealth/theme/app_theme.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  String? Id;
  String? Password;
  // Future<void> dataWrite() async {
  //   var url = Uri.parse('http://10.0.2.2:8000/doctorLogin');
  //   http.Response response = await http
  //       .post(url, body: {'email': 'cramblegod', 'password': 'crambleisagod'});
  //   print('...........');
  //   print('Response status: ${response.statusCode}');
  //   print('Response body: ${response.body}');
  //   print('...........');
  //   // print(await http.read(Uri.parse('https://decentrahealth-server.herokuapp.com/doctorLogin')));
  // }

  @override
  Widget build(BuildContext context) {
    // print('${widget.user.toString().substring(6)[0].toUpperCase()}${widget.user.toString().substring(7)}');
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: primaryColor,
        title: const Text("Doctor Login Page"),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.only(
                  top: 60.0,
                  bottom: 60.0,
                ),
                child: Center(
                  child: SizedBox(
                      width: 200,
                      height: 150,
                      /*decoration: BoxDecoration(
                  color: Colors.red,
                  borderRadius: BorderRadius.circular(50.0)),*/
                      child: Image.asset('asset/images/doctor_logo.png')),
                ),
              ),
              Padding(
                //padding: const EdgeInsets.only(left:15.0,right: 15.0,top:0,bottom: 0),
                padding: const EdgeInsets.symmetric(horizontal: 15),
                child: TextField(
                  onChanged: (value) {
                    Id = value;
                  },
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: 'UPRN No.'
                      // hintText: 'Enter valid email id as abc@gmail.com'
                      ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(
                    left: 15.0, right: 15.0, top: 15, bottom: 0),
                //padding: EdgeInsets.symmetric(horizontal: 15),
                child: TextField(
                  onChanged: (value) {
                    Password = value;
                  },
                  obscureText: true,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: 'Password',
                    //    hintText: 'Enter secure password'
                  ),
                ),
              ),
              const SizedBox(
                height: 50.0,
              ),
              ElevatedButton(onPressed: () {}, child: const Text('Login')),
            ],
          ),
        ),
      ),
    );
  }
}

// class LogoImage extends StatelessWidget {
//   var user;
//   LogoImage({this.user});
//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//       padding: const EdgeInsets.only(
//         top: 60.0,
//         bottom: 60.0,
//       ),
//       child: Center(
//         child: SizedBox(
//             width: 200,
//             height: 150,
//             /*decoration: BoxDecoration(
//                 color: Colors.red,
//                 borderRadius: BorderRadius.circular(50.0)),*/
//             child: user == Users.patient
//                 ? Image.asset('asset/images/patient_logo.jpeg')
//                 : Image.asset('asset/images/doctor_logo.png')),
//       ),
//     );
//   }
// }
//'https://decentrahealth-server.herokuapp.com/doctorLogin'