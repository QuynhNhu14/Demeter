
namespace Demeter.Domain;

public interface IBaseEntity<T> where T: IEquatable<T>
{
  public T Id { get; set; }
}