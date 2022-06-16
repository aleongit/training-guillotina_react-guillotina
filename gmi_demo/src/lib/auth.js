import { Auth } from "@guillotinaweb/react-gmi";

export class CustomAuth extends Auth {
  async login(username, password) {
    const url = this.getUrl("@login");
    const canido_url = this.getUrl(
      "@canido?permissions=guillotina_demo.AccesGMI"
    );
    try {
      const responseLogin = await fetch(url, {
        method: "post",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (responseLogin.status !== 200) {
        this.errors = "invalid_credentials";
        return false;
      }

      const responseLoginData = await responseLogin.json();

      const respCanIdo = await fetch(canido_url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${responseLoginData.token}`,
        },
      });

      if (respCanIdo.status !== 200 && username !== "root") {
        this.errors = "invalid_credentials";
        return false;
      }

      const canIdoData = await respCanIdo.json();

      if (
        (!("guillotina_demo.AccesGMI" in canIdoData) ||
          !canIdoData["guillotina_demo.AccesGMI"]) &&
        username !== "root"
      ) {
        this.errors = "invalid_credentials";
        return false;
      }

      this.storeAuth(responseLoginData, username);
      return true;
    } catch (e) {
      this.errors = "failed_to_fetch";
      return false;
    }
  }
}