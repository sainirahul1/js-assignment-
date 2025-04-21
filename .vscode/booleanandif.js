function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense) {
      return "Eligible to drive";
    }
    if (obj.temperature > 30 || obj.humidity > 70) {
      return "Warning: High discomfort level";
    }
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) {
      return "Access granted";
    }
    if (!obj.isLoggedIn) {
      return "Please log in";
    }
    if (obj.balance >= 1000 && !obj.isBlocked) {
      return "Premium user";
    }
    if ((obj.country === "USA" || obj.country === "Canada") && obj.age >= 21) {
      return "Eligible for regional offers";
    }
    if (!(obj.subscribed || obj.trialActive)) {
      return "No active plan";
    }
  
    return "No conditions met";
  }
  