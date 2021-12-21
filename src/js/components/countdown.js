/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", function () {
  try {
    let dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    dateEnd.setHours(0, 0, 0);
    let countdown = new LightCountdown(".countdown-week", dateEnd, {
      animation: "animated flipInX",
      animationDuration: "600ms"
    });
  } catch (e) {
    console.error(e);
  }
});