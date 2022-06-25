import 'package:shared_preferences/shared_preferences.dart';

class SharedPrefs {
  static const _phoneNumKey = 'phoneNo';
  static SharedPreferences? _preferances;

  static Future init() async {
    _preferances = await SharedPreferences.getInstance();
  }

  static Future setPhoneNo(String phonenum) async =>
      await _preferances!.setString(_phoneNumKey, phonenum);

  static String? getPhoneNum() => _preferances!.getString(_phoneNumKey);
}
