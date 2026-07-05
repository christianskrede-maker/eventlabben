type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <header
      style={{
        marginBottom: 32,
      }}
    >
      <h1
        style={{
          margin: 0,
          color: '#31583a',
          fontSize: '2rem',
        }}
      >
        {title}
      </h1>

      {description && (
        <p
          style={{
            marginTop: 10,
            color: '#666',
            fontSize: '1rem',
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      )}
    </header>
  );
}