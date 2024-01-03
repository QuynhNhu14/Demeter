namespace Demeter.Domain.JsonConverter;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public class AccountJsonConverter : JsonConverter
{

    /// <summary>
    /// Determines whether this instance can convert the specified object type.
    /// </summary>
    /// <param name="objectType">Type of the object.</param>
    /// <returns><c>true</c> if this instance can convert the specified object type; otherwise, <c>false</c>.</returns>
    /// <exception cref="System.NotImplementedException"></exception>
    public override bool CanConvert(Type objectType)
    {
        // Not needed, as we register our converter directly on 
        throw new NotImplementedException();
    }

    /// <summary>
    /// Reads the JSON representation of the object.
    /// </summary>
    /// <param name="reader">The <see cref="T:Newtonsoft.Json.JsonReader" /> to read from.</param>
    /// <param name="objectType">Type of the object.</param>
    /// <param name="existingValue">The existing value of object being read.</param>
    /// <param name="serializer">The calling serializer.</param>
    /// <returns>The object value.</returns>
    /// <exception cref="System.ArgumentOutOfRangeException"></exception>
    /// <exception cref="System.NotSupportedException"></exception>
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
    {
        if (reader.TokenType == JsonToken.Null)
        {
            return null;
        }

        JToken jToken = JToken.ReadFrom(reader);
        string propertyName = $"{nameof(Bill.Type)}";
        int? type = jToken.Value<int?>(propertyName);

        if (type == null)
        {
            type = jToken.Value<int?>(propertyName.ToCamelCase());
        }

        Bill result = null;


        switch (type)
        {
            case null:
                throw new ArgumentOutOfRangeException($"{nameof(BillTypeJsonConverter)} can't convert to activity, property {propertyName} does not have expected value");

            case (int)AccountType.Customer:
                result = new BillFika();
                break;

            case (int)AccountType.Shop:
                result = new BillTaxi();
                break;

            case (int)BillType.TechLunch:
                result = new BillTechLunch();
                break;

            case (int)BillType.TeamBuilding:
                result = new BillTeamBuilding();
                break;

            default:
                throw new NotSupportedException($"{nameof(BillTypeJsonConverter)} can't convert to activity, no matching type defined for enum value {type} in {nameof(BillType)}");
        }
        
        serializer.Populate(jToken.CreateReader(), result);

        return result;
    }

    /// <summary>
    /// Writes the JSON representation of the object.
    /// </summary>
    /// <param name="writer">The <see cref="T:Newtonsoft.Json.JsonWriter" /> to write to.</param>
    /// <param name="value">The value.</param>
    /// <param name="serializer">The calling serializer.</param>
    /// <exception cref="System.NotImplementedException"></exception>
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Gets a value indicating whether this <see cref="T:Newtonsoft.Json.JsonConverter" /> can read JSON.
    /// </summary>
    /// <value><c>true</c> if this <see cref="T:Newtonsoft.Json.JsonConverter" /> can read JSON; otherwise, <c>false</c>.</value>
    public override bool CanRead
    {
        get { return true; }
    }

    /// <summary>
    /// Gets a value indicating whether this instance can write.
    /// </summary>
    /// <value><c>true</c> if this instance can write; otherwise, <c>false</c>.</value>
    public override bool CanWrite
    {
        get { return false; }
    }
}