namespace RsaKeyGenerator
{
    using System;
    using System.Security.Cryptography;

    public class Program
    {
        public static void Main(string[] args)
        {
            using (RSACryptoServiceProvider rs = new RSACryptoServiceProvider(2048))
            {
                string xml = rs.ToXmlString(includePrivateParameters: true);
                Console.WriteLine(xml);
                Console.ReadLine();
            }
        }
    }
}
