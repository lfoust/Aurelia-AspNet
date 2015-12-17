namespace AureliaAspNet.Services
{
    using System.Threading.Tasks;
    using AureliaAspNet.Models;

    public interface IUserService
    {
        Task<User> FindById(string id);
        Task<User> FindByFacebookId(string id);
        Task<User> FindByGoogleId(string id);
        Task Add(User user);
        Task Update(User user);
        Task Delete(string id);
    }

    public class MockUserService : IUserService
    {
        public Task<User> FindById(string id)
        {
            var user = new User
            {
                Id = id,
                UserName = "User " + id,
                FacebookId = id,
                GoogleId = id
            };
            return Task.FromResult(user);
        }

        public Task<User> FindByFacebookId(string id)
        {
            return this.FindById(id);
        }

        public Task<User> FindByGoogleId(string id)
        {
            return this.FindById(id);
        }

        public Task Add(User user)
        {
            return Task.FromResult(true);
        }

        public Task Update(User user)
        {
            return Task.FromResult(true);
        }

        public Task Delete(string id)
        {
            return Task.FromResult(true);
        }
    }
}