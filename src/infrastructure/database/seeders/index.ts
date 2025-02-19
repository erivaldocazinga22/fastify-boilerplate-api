import { Prisma as prisma } from "../prisma.client";
const run = async () => {
	// logica de criação do seed
	console.log("✅ Seed function finished successfully.");
};

run()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async error => {
		console.error("❌ Erro durante o seed:", error);
		await prisma.$disconnect();
	});
