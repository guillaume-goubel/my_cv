<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProjectController extends AbstractController
{
    #[Route('/project/infos', name: 'app_project_infos')]
    public function index(Request $request, ProjectRepository $projectRepository): JsonResponse
    {   
        
        $requestParam = $request->toArray();
        $project = $projectRepository->findOneBy(['id' => $requestParam['projectId']]);
        
        return new JsonResponse([
            'content' => $this->renderView('project/_infos.html.twig', [
                'project' => $project??null,
            ]),
            'title' => $project->getName()??null,
            'status' => true,
        ]);
        
    }
}
