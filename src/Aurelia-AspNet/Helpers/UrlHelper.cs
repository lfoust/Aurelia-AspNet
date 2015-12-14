namespace AureliaAspNet.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Reflection;
    using System.Text;

    public static class UrlHelper
    {
        /// <summary>
        /// Builds query string parameter from the properties in the provided dictionary.
        /// </summary>
        /// <param name="parameters">The property dictionary.</param>
        /// <returns>"[property0]=[value0]&[property1]=[value1]..."</returns>
        public static string BuildParameters(Dictionary<string, string> parameters)
        {
            if (parameters == null)
            {
                return String.Empty;
            }

            StringBuilder s = new StringBuilder();

            foreach (KeyValuePair<string, string> pair in parameters)
            {
                s.AppendFormat("{0}={1}&", Uri.EscapeDataString(pair.Key), Uri.EscapeDataString(pair.Value));
            }

            if (s.Length > 0)
            {
                s.Remove(s.Length - 1, 1);
            }

            return s.ToString();
        }

        /// <summary>
        /// Builds query string parameter from the properties in the provided object.
        /// </summary>
        /// <param name="parameters">The object.</param>
        /// <returns>"[property0]=[value0]&[property1]=[value1]..."</returns>
        public static string BuildParameters(object parameters)
        {
            if (parameters == null)
            {
                return String.Empty;
            }

            return BuildParameters(ObjectToDictionary(parameters));
        }

        /// <summary>
        /// Returns a property dictionary for the provided object.
        /// </summary>
        /// <param name="item">The object.</param>
        /// <returns>Dictionary of propery names and values.</returns>
        public static Dictionary<string, string> ObjectToDictionary(object item)
        {
            Dictionary<string, string> values = new Dictionary<string, string>();
            if (item == null)
            {
                return values;
            }

            foreach (PropertyInfo property in item.GetType().GetProperties())
            {
                if (property.CanRead)
                {
                    object o = property.GetValue(item, null);
                    if (o != null)
                    {
                        values.Add(property.Name, o.ToString());
                    }
                }
            }

            return values;
        }
    }
}