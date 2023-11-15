namespace Demeter.Domain;

public abstract class JsonBase
{
    public virtual Dictionary<string, object> AdditionalProperties { get; set; }
}