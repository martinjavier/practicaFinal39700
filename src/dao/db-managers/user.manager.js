class UserManager {
  constructor(model) {
    this.model = model;
  }

  async addUser(user) {
    try {
      const data = await this.model.create(user);
      const response = JSON.parse(JSON.stringify(data));
      return response;
    } catch (error) {
      throw new Error(`Error al guardar: ${error.message}`);
    }
  }

  async getUsers() {
    try {
      const users = await this.model.find().select("-password").exec();
      const response = JSON.parse(JSON.stringify(users));
      return response;
    } catch (error) {
      throw new Error(`Error getting users: ${error.message}`);
    }
  }

  async getUserById(userId) {
    try {
      const data = await this.model.findOne({ _id: userId });
      const response = JSON.parse(JSON.stringify(data));
      return response;
    } catch (error) {
      throw new Error(`Error al obtener usuario: ${error.message}`);
    }
  }

  async getUserByEmail(email) {
    try {
      const data = await this.model.findOne({ email: email });
      const response = JSON.parse(JSON.stringify(data));
      return response;
    } catch (error) {
      throw new Error(`Error al obtener usuario: ${error.message}`);
    }
  }

  async deleteUser(userId) {
    try {
      const data = await this.model.deleteUser({ _id: userId });
      const response = JSON.parse(JSON.stringify(data));
      return response;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  async deleteInactiveUsers() {
    try {
      var d = new Date();
      var older_than = new Date(d.setDate(d.getDate() - 2));
      const data = await this.model.deleteMany({
        last_connection: { $lte: older_than },
      });
      const response = JSON.parse(JSON.stringify(data));
      return response;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  async updateUser(userId, user) {
    try {
      const filter = { _id: userId };
      const data = await this.model.findOneAndUpdate({
        filter,
        user: user,
      });
      const response = JSON.parse(JSON.stringify(data));
      return response;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }
}

export default UserManager;
